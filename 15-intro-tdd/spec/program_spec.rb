require_relative '../program'

describe 'is_palindrome?' do
  it 'should return true if the string is a palindrome if passed a palindrome' do
    expect(is_palindrome?('kayak')).to be(true)
  end

  it 'should return false if the string is not a palindrome if passed not a palindrome' do
    expect(is_palindrome?('kayaks')).to be(false)
  end

  it 'should return true if the input has spaces and is a palindrome' do
    expect(is_palindrome?('a lad named e mandala')).to be(true)
  end

  it 'should return false if the input has spaces and is not a palindrome' do
    expect(is_palindrome?('there are people on the street')).to be(false)
  end

  it 'should return true if the input has spaces, capital letters, and is a palindrome' do
    expect(is_palindrome?('a laD naMed e maNdala')).to be(true)
  end

  it 'should return false if the input has spaces, capital letters, and is not a palindrome' do
    expect(is_palindrome?('a laD naMed -fds89lk e maNdala')).to be(false)
  end

  it 'should return true if the input has spaces, capital letters, has puncuation, and is a palindrome' do
    expect(is_palindrome?('!a laD. naMed e. maNdala')).to be(true)
  end

  it 'should return false if the input has spaces, capital letters, has puncuation, and is not a palindrome' do
    expect(is_palindrome?('!a laaD. n2aMed e. 35maNdal£(a')).to be(false)
  end

  it 'should raise an error if given an int' do 
    expect{ is_palindrome?(131) }.to raise_error(ArgumentError)
  end

  it 'should raise an error if passed nil' do 
    expect{ is_palindrome?(nil) }.to raise_error(ArgumentError)
  end

  it 'should raise an error if passed an empty string' do 
    expect{ is_palindrome?('') }.to raise_error(ArgumentError)
  end

  it 'should raise an error if passed a string of length 1' do 
    expect{ is_palindrome?('a') }.to raise_error(ArgumentError)
  end

end
