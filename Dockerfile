FROM cypress/included:9.6.1
RUN mkdir /Cypress-CI
WORKDIR /Cypress-CI
COPY . /Cypress-CI/
RUN npm install
RUN npm update
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "chrome-tests"]
