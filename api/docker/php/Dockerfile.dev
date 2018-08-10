FROM php:7.1-apache

RUN apt-get update && \
    apt-get install -y git curl && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf

ADD php.ini /usr/local/etc/php/
ADD 000-default.conf /etc/apache2/sites-available/000-default.conf
RUN docker-php-ext-enable opcache

RUN a2enmod speling rewrite headers
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
