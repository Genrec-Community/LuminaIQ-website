'use client';
/* eslint-disable @next/next/no-img-element -- YouTube thumbnail, loaded lazily */
import { useState } from 'react';

/** YouTube facade: a designed poster until the visitor asks to play, then the privacy-enhanced embed. */
export function Video({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="video">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__poster" onClick={() => setPlay(true)}>
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
          />
          <span className="video__play">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
            <span>Play the walkthrough</span>
          </span>
        </button>
      )}
    </div>
  );
}
