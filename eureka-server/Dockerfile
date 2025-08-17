# ---- BUILD STAGE ----
FROM maven:3.9.10-amazoncorretto-21 AS build

WORKDIR /app

# Copy Maven configuration and source code
COPY pom.xml .
COPY src ./src

# Build the project and skip tests
RUN mvn clean package -DskipTests

# ---- RUNTIME STAGE ----
FROM openjdk:21-slim

WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (optional, if your app runs on 8761)
EXPOSE 8761

# Command to run the application
CMD ["java", "-jar", "app.jar"]
