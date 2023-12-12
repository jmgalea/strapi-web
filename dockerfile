FROM strapi/base
WORKDIR /app
COPY ./package.json ./
RUN yarn install --ignore-engines 
COPY . .
ENV NODE_ENV production
RUN yarn build --ignore-engines
EXPOSE 1337
CMD ["yarn", "start"]
