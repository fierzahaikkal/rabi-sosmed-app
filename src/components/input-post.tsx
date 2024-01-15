import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Lightbulb, Image } from 'lucide-react';

export default function InputPost() {
  return (
    <div className="flex w-[1119px] flex-col justify-start gap-4">
      <div className="flex items-center rounded border border-gray-400 bg-violet-200 p-4">
        <Lightbulb className="stroke-accent" /> {/* Lightbulb on the left */}
        <Textarea
          className="flex-grow rounded bg-violet-200 p-4 text-left text-body leading-normal text-slate-950"
          placeholder="How's your day?!"
        />
        <Image className="stroke-primary" /> {/* Image on the right */}
      </div>
      <Button>Post</Button>
    </div>
  );
}
