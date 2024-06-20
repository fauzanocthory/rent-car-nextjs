import { Button, FileInput, Label, TextInput } from "flowbite-react";

export function ProfileComponent() {
  return (
    <form>
      <div className="">
        <h1 className="text-4xl font-bold">Profile</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nama" value="Nama Anda" />
          </div>
          <TextInput id="nama" type="nama" placeholder="Namamu" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email Anda" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nomor_hp" value="Nomor HP/WA" />
          </div>
          <TextInput
            id="nomor"
            type="number"
            placeholder="08121238491"
            required
          />
        </div>
      </div>


      <div className="">
      <div>
          <div className="mb-2 block">
            <Label htmlFor="ktp" value="KTP" />
          </div>
          <FileInput id="ktp" sizing="lg" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="simA" value="SIM A" />
          </div>
          <FileInput id="simA" sizing="lg" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="simC" value="SIM C" />
          </div>
          <FileInput id="simC" sizing="md" />
        </div>
      </div>

      <Button type="submit" className="mt-2">Edit</Button>
    </form>
  );
}
