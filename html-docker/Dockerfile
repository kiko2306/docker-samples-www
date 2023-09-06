# Use the official NGINX base image
FROM nginx

# Copy your NGINX configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static HTML file to the container
COPY public_html/index.html /usr/share/nginx/html

# Expose port 80
EXPOSE 80