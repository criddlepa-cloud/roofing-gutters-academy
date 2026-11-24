import { attributions } from "@/lib/attributions";

export function Figure({
  file,
  alt,
  caption,
  contain = false,
}: {
  file: string;
  alt: string;
  caption: string;
  contain?: boolean;
}) {
  const credit = attributions.find((item) => item.file === file);
  return (
    <figure className={`figure${contain ? " contain" : ""}`}>
      <img src={`/images/${file}`} alt={alt} />
      <figcaption>
        <span>{caption}</span>
        {credit ? (
          <span className="credit">
            Photo: {credit.artist}. {credit.license}.{" "}
            <a href={credit.page}>Source</a>
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
