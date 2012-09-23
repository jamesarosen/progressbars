desc "Run tests"
task :spec do
  sh "bundle exec jasmine-headless-webkit" do |ok, res|
    fail "Test failures" unless ok
  end
  puts "Tests passed"
end