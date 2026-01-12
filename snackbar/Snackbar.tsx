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

  const CloseSnackBar = () => {
    setIsVisible(false);
  };

  if (variant === 'super_large') {
    return (
      <section
        className={classNames.root}
        data-id={id}
        data-variant={variant}
      >
        <div className={classNames.container}>
          <header className="mb-2">
            <div className={classNames.overline}>
              {activeAnnouncement?.overline || 'Announcement'}
            </div>
          </header>

          <div className="flex flex-col gap-4">
            <div className={classNames.message}>
              {messageText}
            </div>

            <div className="flex justify-end">
              {closable && (
                <button
                  className={classNames.close}
                  onClick={() => CloseSnackBar()}
                  aria-label="Close"
                >
                  Dismiss
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /**
   * Default variant
   */
  return (
    <section
      className={classNames.root}
      data-id={id}
      data-variant={variant}
    >
      <div className={classNames.container}>
        <div className={classNames.content}>
          {activeAnnouncement?.overline && (
            <div className={classNames.overline}>
              {activeAnnouncement.overline}
            </div>
          )}

          <div className={classNames.message}>
              {messageText}
          </div>
        </div>

        {closable && (
          <button
            className={classNames.close}
            onClick={() => {
              setIsVisible(false);
            }}
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
