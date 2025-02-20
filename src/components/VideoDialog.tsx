"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/_components/ui/dialog";
import { AspectRatio } from "@/_components/ui/aspect-ratio";
import ReactPlayer from "react-player/youtube";
import Button from "@/_components/Button";
import { CirclePlay } from "lucide-react";

export const VideoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          aria-label="Assistir demonstração"
          className="w-full sm:w-auto flex items-center gap-2"
        >
          <CirclePlay /> Assistir Demo
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden max-w-[740px] xl:max-w-[1050px]">
        <AspectRatio ratio={16 / 9}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=raeky9fze0s"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
            }}
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
};
