FROM ubuntu:16.04
MAINTAINER martin tlkuo.frb@gmail.com
EXPOSE 4000
RUN apt-get update && apt-get install -y git

# Install Jekyll Requirements: Ruby RubyGems GCC Make
RUN apt-get install -y ruby ruby-dev gcc make

# Install Jekyll
RUN gem update && gem install jekyll bundler

# Download source code
WORKDIR /root
RUN git clone https://github.com/tlkuo/tlkuo.github.io.git tlkuo.github.io
WORKDIR tlkuo.github.io
RUN git checkout -b develop origin/develop

# Install dependency
RUN apt-get install -y libz-dev && bundle install

# Run server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]
