import { Button } from "flowbite-react";
import { useFormStatus } from "react-dom";

export function ButtonPending({titlePending, title, warnaButton}: any) {
  const { pending } = useFormStatus();
  return (
    <Button color={warnaButton} type="submit" disabled={pending}>
      {pending ? titlePending : title}
    </Button>
  );
};
