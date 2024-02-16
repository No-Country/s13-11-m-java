FROM openjdk:21-jdk-slim as builder

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw  ./
COPY pom.xml ./

#RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

RUN ./mvnw dependency:go-offline

COPY src/ ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:21-jdk-slim

WORKDIR /app
RUN mkdir ./logs
COPY --from=builder /app/target/calendarioInteligente-0.0.1-SNAPSHOT.jar .
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "calendarioInteligente-0.0.1-SNAPSHOT.jar"]