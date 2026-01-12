import React, { useState } from 'react';
import { SnackBarProps, Announcement } from './SnackBar.types';

const SnackBar = ({
  id,
  message,
  announcements = [],
  closable = false,
  variant = 'default',
  classNames,
}: SnackBarProps) => {
  const [IsVisible, setIsVisible] = useState(true);
  
  if (IsVisible === false || IsVisible === null) {
    return null;
  }

  const activeAnnouncement: Announcement | undefined = announcements.length ? announcements[0] : undefined;
  
  const messageText = activeAnnouncement?.message ?? message;

  const closeSnackBar = () => {
    setIsVisible(false);
  };
  return (
    <section
      className={classNames.root}
      data-id={id}
      data-variant={variant}
    >
      <div className={classNames.container}>
        {variant === 'super_large' && (
          <header className="mb-2">
            <div className={classNames.overline}>
              {activeAnnouncement?.overline || 'Announcement'}
            </div>
          </header>
        )}

        <div className={classNames.content}>
          {variant !== 'super_large' && activeAnnouncement?.overline && (
            <div className={classNames.overline}>
              {activeAnnouncement.overline}
            </div>
          )}

          <div className={classNames.message}>
            {messageText}
          </div>

          {closable && variant === 'super_large' && (
            <div className="flex justify-end">
              <button
                className={classNames.close}
                onClick={closeSnackBar}
                aria-label="Close"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>

        {closable && variant !== 'super_large' && (
          <button
            className={classNames.close}
            onClick={closeSnackBar}
            aria-label="Close"
          >
            ✕
          </button>
        )}
      </div>
    </section>
  );
};

export default SnackBar;
