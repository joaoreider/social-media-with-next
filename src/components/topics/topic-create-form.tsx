import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col p-4 gap-4 w-80 ">
            <h3 className="text-lg bold">Create a topic </h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic here"
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
