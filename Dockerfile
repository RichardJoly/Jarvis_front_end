FROM node:14.16-alpine3.10

COPY ./ /home/my_app/

RUN ls /home/my_app

RUN ls /home/my_app/jarvis_front/public

WORKDIR /home/my_app/jarvis_front

RUN npm install axios react-router-dom

EXPOSE 3000:3000
            
CMD ["npm","run","start"]