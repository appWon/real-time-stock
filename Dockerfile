FROM node:16.4.2 as build
WORKDIR /app
COPY . /app/
# COPY <복사할 파일 경로> <이미지에서 파일이 위치할 경로> 형식입니다.
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
# COPY <복사할 파일 경로> <이미지에서 파일이 위치할 경로> 형식입니다.
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx","-g","daemon off;"]