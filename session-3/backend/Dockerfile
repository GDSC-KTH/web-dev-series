FROM python:latest

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  postgresql-client \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /service
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY ./myblog /service

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]