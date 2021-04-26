#-------------------------------- Approach 1 start-----------------------------------
#Stage 1
FROM node as build-step
RUN mkdir -p /app
WORKDIR /app
COPY angular/corona-updates/package.json /app
RUN npm install
COPY angular/corona-updates/ /app
RUN npm run build --prod


#stage 2
FROM nginx
COPY --from=build-step /app/dist/corona-updates /usr/share/nginx/html
#------------------------------- End of Approach 1 --------------------------------



#-------------------------------- Approach 2  start -----------------------------------
#directly copy the prod files from local to nginx 
# FROM nginx
# COPY angular/corona-updates/dist/dist/corona-updates /usr/share/nginx/html
#------------------------------- End of Approach 1 --------------------------------
