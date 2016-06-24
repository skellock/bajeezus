import test from 'ava'
import greeter from '../Greeter'

test('says hello', t => {
  t.is(greeter('World'), 'Hello World!')
})
