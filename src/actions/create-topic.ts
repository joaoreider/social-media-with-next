"use server";
import { z } from "zod";

const CreateTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(50)
    .regex(/[a-z-]/, {
      message: "Name must be lowercase letters or dashes without spaces.",
    }),
  description: z.string().min(10).max(500),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = CreateTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  return {
    errors: {},
  };
  //TODO: revalidate homepage
}
