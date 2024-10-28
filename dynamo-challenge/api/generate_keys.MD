# Generate the private key
openssl genrsa -out private.pem 2048

# Extract the public key
openssl rsa -in private.pem -outform PEM -pubout -out public.pem

# Convert the private key to base64
base64 -w 0 private.pem > private.xt

# Convert the public key to base64
base64 -w 0  public.pem > public.txt