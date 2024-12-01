import { Fragment } from 'react';
import Image from 'next/image';

function Text({ text }: { text: any[] }) {
  if (!text) return null;

  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    if (!text) return null;

    return (
      <span
        key={index}
        className={[
          bold ? 'font-bold' : '',
          code ? 'font-mono text-sm px-1 bg-secondary' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.content}
      </span>
    );
  });
}

export function RenderBlock({ block }: { block: any }) {
  if (!block) {
    console.warn('Bloco vazio recebido');
    return null;
  }

  const { type } = block;
  const value = block[type];

  if (!value) {
    console.warn(`Valor vazio para bloco do tipo: ${type}`);
    return null;
  }

  switch (type) {
    case 'paragraph':
      return (
        <p className="mb-4">
          <Text text={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold mt-8 mb-4">
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold mt-6 mb-4">
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="text-xl font-bold mt-4 mb-2">
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
      return (
        <ul className="list-disc mb-4">
          <li className="ml-4">
            <Text text={value.rich_text} />
          </li>
        </ul>
      );
    case 'numbered_list_item':
      return (
        <ol className="list-decimal mb-4">
          <li className="ml-4">
            <Text text={value.rich_text} />
          </li>
        </ol>
      );
    case 'to_do':
      return (
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            defaultChecked={value.checked}
            className="rounded border-border"
            disabled
          />
          <span><Text text={value.rich_text} /></span>
        </div>
      );
    case 'toggle':
      return (
        <details className="mb-4">
          <summary className="cursor-pointer">
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <div key={block.id} className="ml-4 mt-2">
              <RenderBlock block={block} />
            </div>
          ))}
        </details>
      );
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption?.length ? value.caption[0]?.plain_text : '';
      return (
        <figure className="my-8">
          <div className="relative aspect-video">
            <Image
              src={src}
              alt={caption || 'Post image'}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    case 'code':
      return (
        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm font-mono">
            <Text text={value.rich_text} />
          </code>
        </pre>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-border pl-4 my-4">
          <Text text={value.rich_text} />
        </blockquote>
      );
    case 'divider':
      return <hr className="my-8 border-border" />;
    default:
      console.warn('Tipo de bloco não suportado:', type);
      return null;
  }
}
