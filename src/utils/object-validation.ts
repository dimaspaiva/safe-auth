export type ValidateObject = (
  object: { [key: string]: unknown },
  requiredKeys: string[]
) => void;

export const validateObject: ValidateObject = (obj, requiredKeys) => {
  for (const key of requiredKeys) {
    if (requiredKeys.includes(key) && !obj[key]) {
      throw new Error(`Validation failed, missing ${key} property`);
    }
  }
};
