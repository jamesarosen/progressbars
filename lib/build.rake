require 'stringio'
require 'multi_json'

desc 'build index.js for distribution via Bower'
task :build do
  build_template = File.read( PROJECT_ROOT.join('lib/BuildTemplate.js') )

  version = MultiJson.decode(
      File.read( PROJECT_ROOT.join('component.json') )
    )['version']

  contents = LIB_FILES.inject( StringIO.new ) do |sum, lib_file|
    sum << "(function() {"
    sum << File.read(lib_file)
    sum << "}());\n"
    sum
  end.string

  outfile = PROJECT_ROOT.join 'index.js'

  File.open( outfile, 'w' ) do |f|
    f.write build_template.
              sub('{{ PROGRESSBARS_VERSION }}', version).
              sub('{{ PROGRESSBARS_LIBRARIES }}', contents)
  end
  puts "Wrote #{outfile}"
end
