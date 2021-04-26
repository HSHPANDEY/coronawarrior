#-------------------------------- Approach 1 start-----------------------------------
# #Stage 1
# FROM node as build-step
# RUN mkdir -p /app
# WORKDIR /app
# COPY angular/corona-updates/package.json /app
# RUN npm install
# COPY angular/corona-updates/ /app
# RUN npm run build --prod


# #stage 2
# FROM nginx
# COPY --from=build-step /app/dist/corona-updates /usr/share/nginx/html
#------------------------------- End of Approach 1 --------------------------------



#-------------------------------- Approach 2  start -----------------------------------
#directly copy the prod files from local to nginx 
#cd angular/corona-updates
#npm install
#ng build --prod (if Angular CLI is installed or npm )
FROM nginx:1.12-alpine
RUN rm etc/nginx/conf.d/default.conf
COPY angular/corona-updates/dist/corona-updates /usr/share/nginx/html
COPY conf/nginx /etc/nginx/conf.d/  
#------------------------------- End of Approach 1 --------------------------------
