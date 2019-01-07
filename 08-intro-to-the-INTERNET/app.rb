require "pry"

class App
  def self.homepage
    "<h1>WELCOME HOME My name is Dan</h1>"
  end

  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path == "/"
      resp.write("<h1>my site</h1><p>this is some text</p><a href='https://google.com'>go to google</a>")
      resp.status = 418
    elsif req.path == "/cats"
      resp.write("MEOW")
      resp.status = 200
    else
      resp.write("THIS IS BAD... 404")
      resp.status = 404
    end

    resp.finish
  end
end
