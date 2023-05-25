import * as React from "react";
import { Html } from "@react-email/html";

export function EmailTemplate({
  message,
  phone,
}: {
  message: string;
  phone: string;
}) {
  return (
    <Html lang="en">
      <p>${message}</p>
      <br />
      <span>${phone}</span>
    </Html>
  );
}
