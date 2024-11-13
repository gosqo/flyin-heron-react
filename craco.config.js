module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        // live reload, Hot Module Replacement 를 위한 웹소켓 연결 설정
        protocol: "wss", // react 는 내부적으로 http://locahost:3000 에서 돌고 있으므로 wss 아닌 ws 프로토콜 선택.
        hostname: "localhost",
        port: 0, // 생략 시 기본값 3000
        pathname: "/ws",
      },
    },
  },
};
