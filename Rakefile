require 'pathname'
require 'multi_json'
require 'rake/clean'

# Build information:

PROJECT_ROOT = Pathname.new( File.expand_path(File.dirname(__FILE__)) )

VERSION = MultiJson.decode(
    File.read( PROJECT_ROOT.join('component.json') )
  )['version']

LIB_FILES = [ 'ProgressBar', 'BarView' ].map do |f|
  PROJECT_ROOT.join "lib/#{f}.js"
end

Dir.glob( PROJECT_ROOT.join('lib/**/*.rake') ).each { |task| load task }

CLOBBER.include PROJECT_ROOT.join('{components,node_modules}').to_s

task :jshint => :getting_started
task :build  => :jshint
task :spec   => :build
