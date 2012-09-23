task :getting_started do

  missing = false

  dependencies = {
    :bundle => 'Install it with `gem install bundler`',
    :npm    => 'Install it from http://nodejs.org/',
    :bower  => 'Install it with `npm install bower`'
  }.each do |dependency, instructions|
    which = `which #{dependency}`
    if which =~ /^\s*$/
      puts "Could not find #{dependency}. #{instructions}"
      missing = true
    end
  end

  fail if missing

end
