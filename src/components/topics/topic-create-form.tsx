"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col p-4 gap-4 w-80 ">
            <h3 className="text-lg bold">Create a topic </h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic here"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            <Button type="submit" color="primary" variant="flat">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
