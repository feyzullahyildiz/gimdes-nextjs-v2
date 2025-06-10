// UTF-8 to ASCII character mapping
const charMap: Record<string, string> = {
  ç: "c",
  Ç: "C",
  ğ: "g",
  Ğ: "G",
  ı: "i",
  İ: "I",
  ö: "o",
  Ö: "O",
  ş: "s",
  Ş: "S",
  ü: "u",
  Ü: "U",
  â: "a",
  Â: "A",
  à: "a",
  À: "A",
  á: "a",
  Á: "A",
  ä: "a",
  Ä: "A",
  ã: "a",
  Ã: "A",
  å: "a",
  Å: "A",
  æ: "ae",
  Æ: "AE",
  è: "e",
  È: "E",
  é: "e",
  É: "E",
  ê: "e",
  Ê: "E",
  ë: "e",
  Ë: "E",
  ì: "i",
  Ì: "I",
  í: "i",
  Í: "I",
  î: "i",
  Î: "I",
  ï: "i",
  Ï: "I",
  ñ: "n",
  Ñ: "N",
  ò: "o",
  Ò: "O",
  ó: "o",
  Ó: "O",
  ô: "o",
  Ô: "O",
  õ: "o",
  Õ: "O",
  ø: "o",
  Ø: "O",
  œ: "oe",
  Œ: "OE",
  ù: "u",
  Ù: "U",
  ú: "u",
  Ú: "U",
  û: "u",
  Û: "U",
  ý: "y",
  Ý: "Y",
  ÿ: "y",
  Ÿ: "Y",
};

/**
 * Converts UTF-8 characters to ASCII equivalents
 */
function toAscii(str: string): string {
  return str.replace(/[^\x00-\x7F]/g, (char) => charMap[char] || char);
}

/**
 * Converts a string to kebab-case
 */
function toKebabCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Creates a slug from a string and optional ID
 * @param text - The text to convert to slug
 * @param id - Optional ID to append to the slug
 * @returns The generated slug
 */
export function toSlug(text: string, id?: string | number): string {
  const asciiText = toAscii(text);
  const kebabText = toKebabCase(asciiText);

  if (id !== undefined && id !== null && id !== "") {
    return `${kebabText}-${id}`;
  }

  return kebabText;
}

/**
 * Extracts ID from a slug
 * @param slug - The slug to parse
 * @returns The ID if present, otherwise undefined
 */
export function fromSlug(slug: string): string | undefined {
  if (!slug || typeof slug !== "string") {
    return undefined;
  }

  const parts = slug.split("-");

  // Check if the last part is a number (ID)
  const lastPart = parts[parts.length - 1];
  const isLastPartNumeric = /^\d+$/.test(lastPart);

  if (isLastPartNumeric && parts.length > 1) {
    return lastPart;
  }

  // If no numeric ID found, return undefined
  return undefined;
}
