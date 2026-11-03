import { either } from 'fp-ts';
import { z, type ZodSafeParseResult, type ZodType } from 'zod';
import { ValidationException } from '../exceptions/ValidationException';

export const validate = <O>(result: ZodSafeParseResult<O>) => {
  if (!result.success) {
    const message = result.error.issues
      .map((i) => `Path: ${i.path.join('.')} Code: ${i.code} Message: ${i.message}`)
      .join('\n');
    return either.left(new ValidationException(message, result.error.issues));
  }
  return either.right(result.data);
};

export function nullable<TSchema extends z.ZodObject<z.ZodRawShape>>(schema: TSchema) {
  const entries = Object.entries(schema.shape) as Array<[string, ZodType]>;

  const newProps = Object.fromEntries(
    entries.map(([key, value]) => [key, value.nullable()])
  ) as unknown as {
    [key in keyof TSchema['shape']]: z.ZodNullable<TSchema['shape'][key]>;
  };

  return z.object(newProps);
}
