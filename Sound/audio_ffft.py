from scipy.io import wavfile as wav
from scipy.fftpack import fft
import numpy as np
rate, data = wav.read('sound1.wav')
fft_out = fft(data)
print(type(fft_out))
np.savetxt("array.txt", fft_out)
# f = open("array.txt", "a")
# for row in length(fft_out):
#     f.write("Now the file has more content!")
# f.close()