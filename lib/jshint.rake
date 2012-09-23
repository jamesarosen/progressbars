namespace :jshint do

  task :check do
    runner = PROJECT_ROOT.join 'node_modules/jshint/bin/hint'
    config_file = PROJECT_ROOT.join '.jshintrc'
    sh "#{runner} #{LIB_FILES.join(' ')} --config #{config_file}" do |ok, res|
      fail 'JSHint found errors in source.' unless ok
    end

    puts "JSHint checks passed"
  end

end

desc 'Run JSHint checks'
task :jshint => 'jshint:check'