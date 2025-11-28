# Fullstack-challenge

## Instructions

This challenge involves building a full-stack application, "CountryVote," that allows users to vote for their favorite countries. The project is divided into two main parts: the backend service and the frontend interface. This document provides the guidelines and requirements to help you approach the challenge as you would in a real production environment. We value clean, efficient, and well-documented code. 

You should be able to complete this project in approximately 15 to 20 hours. Please note that this is just an estimate, not a strict deadline. We’re giving you a week to complete the project, but if you find yourself needing more time, just let us know. Once you’re done, we’d appreciate it if you could provide a rough estimate of the time you spent on it.

Feel free to ask any question to Loopstudio via email. 

## Deliverables

A Github repository that contains:

1. The implementation of both backend service and frontend application
2. Instructions on how to install, test, and run them
3. For each project, a written explanation of the design choices you made, and how it meets both the functional and non-functional requirements. 
4. For each project, a written explanation of any compromise or trade-off that you took because of time constraints.

## Assumptions

Feel free to assume anything you are not 100% sure and our answers don't provide you enough information. Please document those assumptions. 

## Objective
Develop a platform that allows users to submit their favorite country vote and view the top favorite countries.


# CountryVote Service (Backend service)
Please use the following public API (https://restcountries.com/#rest-countries) and implement an API that allows you to achieve the next behaviors:

## Functional requirements

1. Create a user along with their favorite country. For example: John Doe → jhondoe@gmail.com → Italy. Important note: only one vote per email will be allowed
2. Retrieve a list of the most 10 favorite countries and include their details like name, official name, capital city, region, and sub-region (retrieved from the provided API).

# CountryVote Interface (Frontend application)

We created [this design](https://www.figma.com/design/tSSpW00aRvoqSHIEPSAbQX/Fullstack-developer-Challenge---Figma?node-id=0-1) for you to follow. Please, use the CountryVote Service previously described as the backend service for this frontend application.


## Functional requirements

1. Voting Form: Build a form where users can submit their name, email, and select their favorite country from a dropdown. The form should validate for non-empty fields and correct email format.
2. Country Display Table: Show a table of the top 10 countries sorted by votes. Implement search functionality.


## Requirements
- Style the application to look as true to the design as possible.
- Feel free to pick any libraries you consider worth using for the challenge
- We recommend React for frontend and Node (Express/Nest) for backend using Typescript, but any language and framework is accepted, just make sure to validate the decision with LoopStudio team before starting.
