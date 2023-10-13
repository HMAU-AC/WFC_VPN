    let WATCH_HTTP_PLUG_OBJECT = {
        fun: function() {
            this.set = setInterval(() => {
            fetch('/Hereistheheadquartersyoucancheckforfileupdatesrenzhehilu').then(d => d.json())
                    .then(d => {
                        if (!d.time) {} else if (d.time && !this.time) {
                            this.time = d.time
                        } else if (d.time > this.time) {
                            console.log('可以刷新了！！！！');
                            location.reload();
                            this.time = d.time
                        }
                    })
            }, 1000);
        },
        set: null,
        time: null
    };
    WATCH_HTTP_PLUG_OBJECT.fun()
    document.addEventListener("visibilitychange", function() {
        if (!document.hidden) {
        WATCH_HTTP_PLUG_OBJECT.fun()
        } else {
            clearInterval(WATCH_HTTP_PLUG_OBJECT.set)
        }

    });