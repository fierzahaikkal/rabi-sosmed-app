import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function InputSection() {
  return (
    <div className="inline-flex h-[120px] w-full flex-col items-end gap-4 bg-violet-200">
      <div>
        <Textarea
          placeholder="How is your day!"
          className="rounded-xs bg-violet-200 text-body"
        ></Textarea>
        {/* <div className="flex items-center justify-start gap-6">
          <div className="relative h-8 w-8" />
          <div className="text-right text-body text-slate-950">how's your day?!</div>
        </div> */}
        <div className="relative h-6 w-6" />
        <Button>Post</Button>
      </div>
    </div>
  );
}
