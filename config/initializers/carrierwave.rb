CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',                        # required
    :aws_access_key_id      => ENV["AWS_ACCESS_KEY"],                        # required
    :aws_secret_access_key  => ENV["AWS_SECRET_KEY"],
    :region => 'us-west-2'                        # required
  }
  config.fog_directory  = ENV["AWS_BUCKET"]                      # required
end
require 'excon'
Excon.ssl_verify_peer = false