// 右クリック・開発者向けショートカットの抑止
    addEventListener("contextmenu", event => {
      event.preventDefault();
    }, { capture: true });

    addEventListener("keydown", event => {
      const key = String(event.key).toLowerCase();
      const ctrlOrCommand = event.ctrlKey || event.metaKey;
      const extraKey = event.shiftKey || event.altKey;

      const blocked =
        event.key === "F12" ||
        (ctrlOrCommand && ["u", "s"].includes(key)) ||
        (
          ctrlOrCommand &&
          extraKey &&
          ["i", "j", "c", "k"].includes(key)
        );

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, { capture: true });
