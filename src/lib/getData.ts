"use server";

import prisma from "./db";
import { z } from "zod";
import { del, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getimageFromDb = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id },
      select: {
        image: true,
        stnk: true,
        sim: true,
      },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

// USER SERVER ACTION
// FETCH USER
export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

// UPDATE USER
const updateUserSchema = z.object({
  name: z.string(),
  nomorHandphone: z.string(),
  stnk: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya file berupa gambar yang diterima",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar mesti berukuran dibawah 4MB",
    })
    .optional(),
  sim: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya file berupa gambar yang diterima",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar mesti berukuran dibawah 4MB",
    })
    .optional(),
  totalRiwayatBooking: z.string(),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya file berupa gambar yang diterima",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar mesti berukuran dibawah 4MB",
    })
    .optional(),
});

export const updateUser = async (prevState: unknown, formData: FormData) => {
  const validatedFields = updateUserSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const userId = formData.get("userId") as string;
  // GET GAMBAR SIM, STNK, PROFIL DARI DATABASE
  const imageFromDb = await getimageFromDb(userId);

  if (!imageFromDb) {
    return { message: "no data found" };
  }

  const { name, nomorHandphone, stnk, sim, totalRiwayatBooking, image } =
    validatedFields.data;

  let imagePathImage;
  let imagePathSim;
  let imagePathStnk;

  // JIKA UPDATE TIDAK MENGISI FORM GAMBAR MAKA IMAGE AKAN DIISI DARI DATA FOTO

  if (
    !image ||
    image.size <= 0 ||
    !stnk ||
    stnk.size <= 0 ||
    !sim ||
    sim.size <= 0
  ) {
    imagePathImage = imageFromDb.image;
    imagePathStnk = imageFromDb.stnk;
    imagePathSim = imageFromDb.sim;
  } else {
    if (
      imageFromDb.image !==
        "https://m7vwiihfc6hf4bbg.public.blob.vercel-storage.com/PROFILE-ntWbPF3t8umc0N0aMgHbc5J0nyWvVJ.jpg" ||
      imageFromDb.stnk !==
        "https://m7vwiihfc6hf4bbg.public.blob.vercel-storage.com/STNK-aOUSUKEQlDGsstjDjkhKRyaxgOHrLG.png" ||
      imageFromDb.sim !==
        "https://m7vwiihfc6hf4bbg.public.blob.vercel-storage.com/SIM-DVNDYnkJVD42uWQZekL3jT5dj8dpeG.jpg"
    ) {
      await del(imageFromDb.image);
      await del(imageFromDb.stnk);
      await del(imageFromDb.sim);
    }
    const url_image = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    const url_stnk = await put(stnk.name, stnk, {
      access: "public",
      multipart: true,
    });
    const url_sim = await put(sim.name, sim, {
      access: "public",
      multipart: true,
    });
    imagePathImage = url_image.url;
    imagePathStnk = url_stnk.url;
    imagePathSim = url_sim.url;
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        nomorHandphone,
        totalRiwayatBooking,
        stnk: imagePathStnk,
        sim: imagePathSim,
        image: imagePathImage,
      },
    });
    return { message: "ok" };
  } catch (error) {
    return { message: "failed to update data" };
  }
};

// DELETE USER
export const deleteUser = async (id: any) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
    include: {
      accounts: {
        where: {
          userId: id,
        },
      },
      sessions: {
        where: {
          userId: id,
        },
      },
    },
  });
  return deleteUser;
};

// MOBIL SERVER ACTION
// FETCH MOBIL
export const getMobils = async () => {
  const mobils = await prisma.mobil.findMany({
    include: {
      fotoMobil: true,
    },
  });
  return mobils;
};

// SINGLE MOBIL
export const getOneMobil = async (mobilId: any) => {
  const mobils = await prisma.mobil.findUnique({
    where: {
      id: mobilId,
    },
    include: {
      fotoMobil: true,
    },
  });
  return mobils;
};

// TAMBAH MOBIL
const tambahMobilSchema = z.object({
  userId: z.string(),
  type: z.string().min(1),
  merk: z.string().min(1),
  warna: z.string().min(1),
  bahan_bakar: z.string().min(1),
  persneling: z.string().min(1),
  status_booking: z.string().min(1),
  status_pembayaran: z.string().min(1),
  status_penyewaan: z.string().min(1),
  max_penumpang: z.string().min(1),
  air_conditioner: z.string().min(1),
  bluetooth: z.string().min(1),
  audio_jack: z.string().min(1),
  tarif: z.string().min(1),
  nomor_polisi: z.string().min(1),
  foto_mobil: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Gambar diperlukan" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Hanya file berupa gambar yang diterima",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar mesti berukuran dibawah 4MB",
    }),
});

export const tambahMobil = async (prevState: unknown, formData: FormData) => {
  const validatedFields = tambahMobilSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    userId,
    merk,
    type,
    warna,
    bahan_bakar,
    persneling,
    max_penumpang,
    air_conditioner,
    bluetooth,
    audio_jack,
    nomor_polisi,
    foto_mobil,
    tarif,
    status_booking,
  } = validatedFields.data;

  const { url } = await put(foto_mobil.name, foto_mobil, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.mobil.create({
      data: {
        merk,
        type,
        warna,
        bahan_bakar,
        persneling,
        max_penumpang,
        air_conditioner,
        bluetooth,
        audio_jack,
        nomor_polisi,
        fotoMobil: {
          create: {
            image: url,
          },
        },
        tarif,
        status_booking,
        userId,
      },
    });
    revalidatePath("/admin");
    return { message: "ok" };
  } catch (error) {
    return { message: "failed" };
  }
};

// UPDATE MOBIL
const updateSchema = z.object({
  mobilId: z.string(),
  userId: z.string(),
  merk: z.string(),
  type: z.string(),
  warna: z.string(),
  bahan_bakar: z.string(),
  persneling: z.string(),
  status_booking: z.string(),
  status_pembayaran: z.string(),
  status_penyewaan: z.string(),
  max_penumpang: z.string(),
  air_conditioner: z.string(),
  bluetooth: z.string(),
  audio_jack: z.string(),
  tarif: z.string(),
  nomor_polisi: z.string(),
  foto_mobil: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image/"), {
      message: "Hanya file berupa gambar yang diterima",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar mesti berukuran dibawah 4MB",
    }),
});

export const updateMobil = async (prevState: unknown, formData: FormData) => {
  const validateFields = updateSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const {
    mobilId,
    userId,
    merk,
    type,
    warna,
    bahan_bakar,
    persneling,
    status_booking,
    foto_mobil,
    nomor_polisi,
  } = validateFields.data;

  const { url } = await put(foto_mobil.name, foto_mobil, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.mobil.update({
      where: {
        id: mobilId,
      },
      data: {
        merk,
        type,
        warna,
        bahan_bakar,
        persneling,
        status_booking,
        nomor_polisi,
        fotoMobil: {
          create: {
            image: url,
          },
        },
        userId,
      },
    });
    return { message: "ok" };
  } catch (error) {
    return { message: "failed to update data" };
  }
};

// DELETE MOBIL
const deleteSchema = z.object({
  mobilsId: z.string(),
  userId: z.string(),
  fotoMobil: z.string(),
});

export const deleteMobil = async (prevState: unknown, formData: FormData) => {
  const validatedFields = deleteSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { fotoMobil, mobilsId, userId } = validatedFields.data;

  if (!fotoMobil) {
    return { message: "no image found" };
  }
  await del(fotoMobil);
  try {
    await prisma.mobil.delete({
      where: {
        id: mobilsId,
        userId: userId,
      },
      include: {
        fotoMobil: true,
      },
    });
    return { message: "ok" };
  } catch (error) {
    return { message: "Failed to delete data" };
  }
};

// DELETE HANYA FOTO MOBIL
const deletePhotoSchema = z.object({
  fotoMobil: z.string(),
});

export const deletePhotoMobil = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = deletePhotoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { fotoMobil } = validatedFields.data;

  if (!fotoMobil) {
    return { message: "no image found" };
  }
  await del(fotoMobil);
  try {
    await prisma.fotoMobil.deleteMany({
      where: {
        image: fotoMobil,
      },
    });
    return { message: "ok" };
  } catch (error) {
    return { message: "Failed to delete data" };
  }
};

// BOOKING POST
const postBookingSchema = z.object({
  tanggal_sewa: z.string(),
  lama_hari: z.string(),
  mobilId: z.string(),
  userId: z.string(),
});

export const postBooking = async (prevState: unknown, formData: FormData) => {
  const validatedFields = postBookingSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { tanggal_sewa, lama_hari, mobilId, userId } = validatedFields.data;
  // concer string lama_hari jadi number
  const lamahariToNumber = Number(lama_hari)-1
  // convert date jadi datestring dari tanggal_sewa
  const tglSewaDateString = new Date(tanggal_sewa).toLocaleDateString()
  // ubah date string jadi milisecond
  const tglSewaMilisecond = new Date(tglSewaDateString).getTime();
  // kalkulasi lama hari sewa dengan milisecond
  const lamaHariMilisecond = lamahariToNumber*86400000 
  // kalkulasi lama hari dan muali sewa dalam milisecond
  const tglSelesaiSewaMilisecond = lamaHariMilisecond+tglSewaMilisecond
  
  // ubah menjadi datestring agar fapat dibaca manusia 
  // const tglSelesaiSewaDateString = new Date(tglSelesaiSewaMilisecond).toLocaleDateString()


  try {
    await prisma.booking.create({
      data: {
        mobilId: mobilId,
        userId: userId,
        tanggal_mulai_sewa: tglSewaMilisecond,
        lama_hari: lamahariToNumber,
        tglSelesaiSewa: tglSelesaiSewaMilisecond,
      },
    });
    return { message: "ok" };
  } catch (error) {
    return { message: "Failed to create data" };
  }
};

// get data utk user biasa
export const getAllBooking = async () => {
  const allBookings = await prisma.booking.findMany({
    include: {
      mobil: true,
      user: true
    }
  });
  return allBookings;
};

export const getSingleBooking = async (userId:any) => {
  const singleBookings = await prisma.booking.findMany({
    where: {
      userId: userId
    },
    include: {
      mobil: true,
      user: true
    }
  });
  return singleBookings;
};

// edit booking data
const editBookingSchema = z.object({
  status_pembayaran: z.string(),
  status_pengembalian: z.string(),
  bookingId: z.string(),
});

export const editBooking = async (prevState: unknown, formData: FormData) => {
  const validateFields = editBookingSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const {
    status_pembayaran,
    status_pengembalian,
    bookingId
  } = validateFields.data;
  try {
    await prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        status_pembayaran,
        status_pengembalian,
      },
    });
    redirect('/user')
    return { message: "ok" };
  } catch (error) {
    return { message: "failed to update data" };
  }
};