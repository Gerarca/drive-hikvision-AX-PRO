exports.videoConfig = (config) => ({
  key: config.key,
  data: [
    {
      command: "configAlarma",
      devices: [1],
      set: {
        /*
        video: {
          resolution: "1920x1080",
          framerate: 30,
          bitrate: 4096,
        },
        audio: {
          bitrate: 64,
          samplerate: 8000,
        },
        videoRotation: {
          flip: true,
          mirror: true,
        },
        irLed: {
          mode: "auto",
        },
        */
      },
    },
  ],
});
