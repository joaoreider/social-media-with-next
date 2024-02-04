"use client";

import { useFormState } from "react-dom";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

export default function PostCreatForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              label="Title"
              placeholder="Enter the title"
              name="title"
              labelPlacement="outside"
            />
            <Input
              name="content"
              label="Content"
              placeholder="Enter the content"
              labelPlacement="outside"
            />
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
