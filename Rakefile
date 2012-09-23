require 'pathname'
require 'multi_json'

# Build information:

PROJECT_ROOT = Pathname.new( File.expand_path(File.dirname(__FILE__)) )

VERSION = MultiJson.decode(
    File.read( PROJECT_ROOT.join('component.json') )
  )['version']

LIB_FILES = [ 'BarView' ].map do |f|
  PROJECT_ROOT.join "lib/#{f}.js"
end

Dir.glob( PROJECT_ROOT.join('lib/**/*.rake') ).each { |task| load task }

task :spec => :jshint
task :build => :jshint # eventually :spec, once it's reliable
