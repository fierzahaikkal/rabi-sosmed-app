'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { HTMLAttributes } from 'react';
import { Sparkles } from 'lucide-react';
import React from 'react';

interface TiptapProps extends HTMLAttributes<HTMLDivElement> {}
const Tiptap: React.FC<TiptapProps> = ({ className, ...props }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          'min-w-[64px] p-4 text-body text-text border border-solid border-accent bg-secondary rounded-xs',
      },
    },
    content: 'How is your day?!',
  });

  if (!editor) {
    return null;
  }
  return (
    <main>
      <EditorContent editor={editor} />
    </main>
  );
};

export default Tiptap;
