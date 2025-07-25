import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function parseForm(request: Request): Promise<{ [k: string]: FormDataEntryValue; }> {
  const formData = await request.formData();

  const credentials = Object.fromEntries(formData);

  console.log(credentials);
  return credentials;
};


// const data: Record<string, string> = {}
// formData.forEach((value, key) => {
//   data[key] = value.toString()
// });
