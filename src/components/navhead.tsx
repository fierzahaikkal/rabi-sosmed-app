import { Button } from "./ui/button";

export default function Navhead() {
  return (
    <main className="flex w-full items-center justify-between pt-12">
      <div>
        <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
        <p className="text-xs text-accent">Rencana Bicara</p>
      </div>
      <div className="flex gap-x-4">
        <Button variant={"outline"}>Sign In</Button>
        <Button>Getting Started</Button>
      </div>
    </main>
  );
}
