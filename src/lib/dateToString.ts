const dateToString = (tglInMilisecond: any) => {
  return new Date(Number(tglInMilisecond)).toLocaleDateString("id-ID", {
    dateStyle: "full",
  });
};
export default dateToString;
