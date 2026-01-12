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
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const activeAnnouncement: Announcement | undefined =
    announcements.length ? announcements[0] : undefined;

  const messageText = activeAnnouncement?.message ?? message;

  const closeSnackBar = () => {
    setIsVisible(false);
  };

  const renderCloseButton = () => {
    if (!closable) return null;

    if (variant === 'super_large') {
      return (
        <div className="flex justify-end">
          <button
            className={classNames.close}
            onClick={closeSnackBar}
            aria-label="Close"
          >
            Dismiss
          </button>
        </div>
      );
    }

    return (
      <button
        className={classNames.close}
        onClick={closeSnackBar}
        aria-label="Close"
      >
        ✕
      </button>
    );
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

          {variant === 'super_large' && renderCloseButton()}
        </div>

        {variant !== 'super_large' && renderCloseButton()}
      </div>
    </section>
  );
};

export default SnackBar;
