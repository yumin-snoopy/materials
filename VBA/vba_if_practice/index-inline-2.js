const cacheBuster = Date.now();

    const style = document.getElementById("appStyle");
    style.href = `style.css?v=${cacheBuster}`;

    const appScript = document.createElement("script");
    appScript.src = `script.js?v=${cacheBuster}`;
    appScript.defer = true;
    document.body.appendChild(appScript);
